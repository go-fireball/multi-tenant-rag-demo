import { Construct } from "constructs"
import * as cr from "aws-cdk-lib/custom-resources"
import * as iam from "aws-cdk-lib/aws-iam"

export interface AuroraSchemaProps {
  readonly clusterArn: string
  readonly secretArn: string
  readonly databaseName: string
  readonly sql: string
  readonly physicalResourceId: string
}

export class AuroraSchema extends Construct {
  constructor(scope: Construct, id: string, props: AuroraSchemaProps) {
    super(scope, id)

    new cr.AwsCustomResource(this, "Resource", {
      installLatestAwsSdk: false,
      onCreate: {
        service: "RDSDataService",
        action: "executeStatement",
        parameters: {
          resourceArn: props.clusterArn,
          secretArn: props.secretArn,
          database: props.databaseName,
          sql: props.sql,
        },
        physicalResourceId: cr.PhysicalResourceId.of(props.physicalResourceId),
      },
      onUpdate: {
        service: "RDSDataService",
        action: "executeStatement",
        parameters: {
          resourceArn: props.clusterArn,
          secretArn: props.secretArn,
          database: props.databaseName,
          sql: props.sql,
        },
        physicalResourceId: cr.PhysicalResourceId.of(props.physicalResourceId),
      },
      policy: cr.AwsCustomResourcePolicy.fromStatements([
        new iam.PolicyStatement({
          actions: ["rds-data:ExecuteStatement"],
          resources: [props.clusterArn],
        }),
        new iam.PolicyStatement({
          actions: ["secretsmanager:GetSecretValue"],
          resources: [props.secretArn],
        }),
      ]),
    })
  }
}
