import * as React from 'react';
import {connect, Dispatch} from 'react-redux';

import {IToast} from '../interfaces/IToast';
import {hideToast} from '../redux/actions/toasts.actions';
import {IJodelAppStore} from '../redux/reducers';
import {Toast} from './Toast';

interface IToastContainerComponentProps {
    toasts: IToast[];
    onToastClick: (toastId: number) => void;
}

const ToastContainerComponent = ({toasts, onToastClick}: IToastContainerComponentProps) => {
    return <div className="toast-container">
        {toasts.map(toast =>
            <Toast
                key={toast.id}
                toast={toast}
                onClick={onToastClick}
            />)
        }
    </div>;
};

const mapStateToProps = (state: IJodelAppStore): Partial<IToastContainerComponentProps> => {
    return {
        toasts: state.toasts,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<IJodelAppStore>): Partial<IToastContainerComponentProps> => {
    return {
        onToastClick: (toastId: number) => {
            dispatch(hideToast(toastId));
        },
    };
};

export const ToastContainer = connect(mapStateToProps, mapDispatchToProps)(ToastContainerComponent);