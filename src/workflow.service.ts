export interface Workflow {
  id: string;
  name: string;
  department: 'Production' | 'Marketing' | 'Archiving';
  stages: WorkflowStage[];
  currentStage: string;
  status: 'InProgress' | 'Paused' | 'Completed';
}

export interface WorkflowStage {
  name: string;
  assignedTo: string; // User ID
  completed: boolean;
  completedAt?: Date;
}

export interface WorkflowUpdate {
  workflowId: string;
  stage: string;
  action: 'start' | 'complete' | 'pause';
}
