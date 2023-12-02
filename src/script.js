import { createRoot } from 'react-dom';

import "./style.scss";
import Style from "./Style";
import Path from './Path';

document.addEventListener("DOMContentLoaded", () => {
    const pathsEls = document.querySelectorAll(".bBlocksPath");
    pathsEls.forEach((pathsEl) => {
        const attributes = JSON.parse(pathsEl.dataset.attributes);
        const { cId } = attributes;

        const root = createRoot(pathsEl);
        root.render(
            <>
                <Style attributes={attributes} clientId={cId} />
                <Path attributes={attributes} />
            </>
        );

        pathsEl?.removeAttribute("data-attributes");
    });
});
