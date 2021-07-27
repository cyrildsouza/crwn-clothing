import React from 'react';
import { useSelector, shallowEqual} from 'react-redux';
import { IState } from '../../redux/reducer';
import MenuItem from '../menuItem';
import './directoryStyle.scss';

const mapStateToProps = ({ directory }: IState) => ({
    sections: directory.sections,
});

const Directory: React.FunctionComponent = () => {
    const { sections } = useSelector(mapStateToProps, shallowEqual);
    return (
        <div className="directory-menu">
            {sections.map(({ title, imageUrl, id, size, linkUrl }) => {
                return (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>);
            })}
            
        </div>
    );
};

export default Directory;
