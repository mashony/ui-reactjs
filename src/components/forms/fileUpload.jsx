import React from 'react';
import InlineError from './inlineError';
import Label from './label';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

const FileUpload = (props) => {
    const { input, name, label, type, selectDescription, meta: { touched, error } } = props;
    const files = input.value;

    const onChange = (filesToUpload) => {
         var reader = new window.FileReader();
            reader.readAsDataURL(filesToUpload[0]); 
            reader.onloadend = function() {
                const base64data = reader.result;                
                input.onChange(base64data);
            }
    }

    return (
        <div>
            <Dropzone
                className="wfp-btn xsmall dropzone__select"
                name={name}
                onDrop={ onChange } 
            >
                {selectDescription ? selectDescription : 'Upload a file'}
            </Dropzone>
            {touched &&
                error &&
                <span className="error">{error}</span>}
            {files && Array.isArray(files) && (
                <ul className="dropzone__list">
                    { files.map((file, i) => <li key={i}>{file.name} <a onClick={( filesToUpload, e ) => input.onChange('')}>clear</a></li>) }
                </ul>
            )}
        </div>
    );
}

export default FileUpload;