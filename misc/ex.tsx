import React, { useReducer } from 'react';

export type AttachmentUploadState = {
  file: File | null;
  attachment: FileAttachment | null;
  success: boolean;
  error: boolean;
  valid: boolean;
  touched: boolean;
  currentStep: string;
}

const defaultState: AttachmentUploadState = {
  file: null,
  attachment: null,
  success: false,
  error: false,
  valid: false,
  touched: false,
  currentStep: 'awaiting_selection',
};

export function initAttachmentUploadState(initState: Partial<AttachmentUploadState>) {
  return { 
    ...defaultState,
    ...initState
  };
}
const attachmentUploadReducer = (state: AttachmentUploadState, { type, payload }: {type: string; payload: any}) => {
  switch (type) {
    case 'update':
      return {
        ...state,
        file: payload.file,
        error: payload.error,
        touched: true,
      };
    case 'validate':
      return {
        ...state,
        error: payload.error,
        valid: payload.valid,
      };
    case 'upload':
      return {
        ...state,
        file: payload.file,
        error: payload.error,
      };
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect username or password!',
        isLoggedIn: false,
        isLoading: false,
        username: '',
        password: '',
      };
    }
    case 'reset':
      return defaultState;
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

const Form = () => {
const [state, dispatch] = React.useReducer(attachmentUploadReducer, initAttachmentUploadState);
  return (
    <div>
      <input
        className={state.error ? 'error' : ''}
        value={state.value}
        onChange={(event) =>
          dispatch({
            type: 'update',
            payload: {
              file: event.target.value,
              error: state.touched ? event.target.value.length === 0 : null,
            },
          })
        }
      />
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  );
};

export default Form;


function loginReducer(state: any, action: { type: any; fieldName: any; payload: any; }) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case 'login': {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect username or password!',
        isLoggedIn: false,
        isLoading: false,
        username: '',
        password: '',
      };
    }
    case 'logOut': {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}
const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
};
export function LoginUseReducer() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;
  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch({ type: 'login' });
    try {      
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (username === 'ejiro' && password === 'password') {
              resolve();
            } else {
              reject();
            }
          }, 1000);
        });
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };
  return (
    <div className='App'>
      <div className='login-container'>
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => dispatch({ type: 'logOut' })}>
              Log Out
            </button>
          </>
        ) :(
          <form className='form' onSubmit={onSubmit}>
            {error && <p className='error'>{error}</p>}
            <p>Please Login!</p>
            <input
              type='text'
              placeholder='username'
              value={username}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  fieldName: 'username',
                  payload: e.currentTarget.value,
                })
              }
            />
            <input
              type='password'
              placeholder='password'
              autoComplete='new-password'
              value={password}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  fieldName: 'password',
                  payload: e.currentTarget.value,
                })
              }
            />
            <button className='submit' type='submit' disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 
/* <input
  className={state.error ? 'error' : ''}
  value={state.value}
  onChange={(event) =>
    dispatch({
      type: 'update',
      payload: {
        value: event.target.value,
        error: state.touched ? event.target.value.length === 0 : null,
      },
    })
  }
/>;*/
