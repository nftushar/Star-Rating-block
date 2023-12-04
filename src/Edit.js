import React, { useEffect } from "react";
import Settings from "./Settings";
import Style from "./Style";
import Path from './Path';
// import { Path } from '@wordpress/components';

const Edit = (props) => {
  const { className, attributes, setAttributes, clientId } = props;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId, setAttributes]);

  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />
    <div>
      <div className={className} id={`bBlocksPath-${clientId}`}>
        <Style attributes={attributes} clientId={clientId} />
        <Path attributes={attributes} />
      </div>
    </div>
  </>;
};

export default Edit;
