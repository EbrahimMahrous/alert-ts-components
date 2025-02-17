
import { X } from 'lucide-react';
import './index.scss'
import { ReactNode } from 'react';
import { AlertTypes } from '../../../types';

interface IProps {
    type: AlertTypes,
    icon: ReactNode,
    title: string,
    description?: string,
    children?: ReactNode
}
const Alert = ({type= 'alert-error', icon, title, description, children} : IProps) => {
    return (
        <div className={type }>
            <div className='alert-header'>
                <div className='title'>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                </div>
                <X className='close'/>
            </div>
            {children ? children: <p>{description}</p>}
        </div>
    );
}

export default Alert;



