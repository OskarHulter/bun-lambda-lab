export type Result = 'pending' | 'success' | 'error';
export type UploadStepName =
  | 'awaiting_selection'
  | 'file_selected'
  | 'payload_requested'
  | 'file_uploading'
  | 'complete'
  | 'error';

export type UploadHandler = () => Promise<Result>;
export type UploadStep = {
  id: number;
  name: UploadStepName;
  nextStep: UploadStepName;
  handler: UploadHandler;
};
export type UploadSteps = Array<UploadStep>;
const asyncResult = 'success';
const handler = async () => await Promise.resolve<Result>(asyncResult);

const initialStep: UploadStep = {
  id: 0,
  name: 'awaiting_selection',
  nextStep: 'file_selected',
  handler,
} as const;

const selectFile: UploadStep = {
  id: 1,
  name: 'file_selected',
  nextStep: 'payload_requested',
  handler,
} as const;

const requestPayload: UploadStep = {
  id: 2,
  name: 'payload_requested',
  nextStep: 'file_uploading',
  handler,
} as const;

const uploadFile: UploadStep = {
  id: 3,
  name: 'file_uploading',
  nextStep: 'complete',
  handler,
} as const;

export const uploadSteps = [initialStep, selectFile, requestPayload, uploadFile] as const;

export type AttachmentUploadFail = {
  id: number;
  file: File;
  processed: boolean;
};

export type AttachmentUploadAdded = {
  type: 'added';
  id: number;
  file: File;
};
export function fileAttachmentReducer(fileAttachments: Array<FileAttachment>, action: FileAttachmentActions) {
  switch (action.type) {
    case 'added': {
      return [
        ...fileAttachments,
        {
          id: action.id,
          file: action.file,
          processed: false,
        },
      ];
    }
    case 'changed': {
      return fileAttachments.map((fileAttachment) => {
        if (fileAttachment.id === action.fileAttachment.id) {
          return action.fileAttachment;
        } else {
          return fileAttachment;
        }
      });
    }
    case 'validated': {
      return fileAttachments.filter((file) => file.id === action.id);
    }
    case 'uploaded': {
      return fileAttachments.filter((file) => file.id !== action.id);
    }
    case 'removed': {
      return fileAttachments.filter((fileAttachment) => fileAttachment.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action}`);
    }
  }
}
