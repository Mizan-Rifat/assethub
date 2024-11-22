enum WorkflowStage {
  INGESTION = 'ingestion',
  PROCESSING = 'processing',
  REVIEW = 'review',
  APPROVAL = 'approval',
  ARCHIVING = 'archiving'
}

interface Workflow {
  id: string;
  name: string;
  stages: WorkflowStage[];
  currentStage: WorkflowStage;
  isComplete: boolean;
  assetId: string;
}

abstract class WorkflowManager {
  abstract createWorkflow(assetId: string, stages: WorkflowStage[]): Workflow;
  abstract moveToNextStage(workflowId: string): void;
  abstract getWorkflowStatus(workflowId: string): WorkflowStage;
  abstract cancelWorkflow(workflowId: string): void;
}
