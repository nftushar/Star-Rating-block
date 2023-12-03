import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor"; 
import { produce } from 'immer';
import { PanelBody, PanelRow, TabPanel, TextControl, SelectControl,   __experimentalBoxControl as BoxControl } from "@wordpress/components";

import {
	BColor,
	BtnGroup,
	MultiShadowControl,
	Typography
} from "../../Components"; 

const pathAlignments = [
	{ label: __('left', 'text-path'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('center', 'text-path'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('right', 'text-path'), value: 'right', icon: 'editor-alignright' }
];

const Settings = ({ attributes, setAttributes }) => {
	const { svgPath,  strokeColor, mainText, padding, alignment, textTypo, textColor, textShadow, fillColor } = attributes; 
 
	return <InspectorControls>
		<TabPanel
			className="bPlTabPanel"
			tabs={[
				{ name: "general", title: __("General") },
				{ name: "style", title: __("Style") },
			]}
		>
			{(tab) => <>
				{tab.name === "general" && (
					<PanelBody
						className="bPlPanelBody"
						title={__("Settings", "text-path")}
					>
						<TextControl
							className="mt20"
							label={__("Main Text", "text-path")}
							value={mainText}
							onChange={(val) => setAttributes({ mainText: val })}
						/>
						<SelectControl
							label="Path Type"
							className="mt20"
							labelPosition="left"
							value={svgPath}
							options={[
								{ label: 'Circle', value: "M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125" },
								{ label: 'Arc', value: "M0 50 A50 50, 0, 1, 1, 100 50" },
								{ label: 'Line', value: "M 0 27 l 250 -22" },
								{ label: 'Oval', value: "M.25,62.875C.25,28.2882,56.2144.25,125.25.25s125,28.0382,125,62.625-55.9644,62.625-125,62.625S.25,97.4619.25,62.875" },
								{ label: 'Spiral', value: "M.1848,49.0219a149.3489,149.3489,0,0,1,210.9824-9.8266,119.479,119.479,0,0,1,7.8613,168.786A95.5831,95.5831,0,0,1,84,214.27a76.4666,76.4666,0,0,1-5.0312-108.023" },
							]}
							onChange={(val) => setAttributes({ svgPath: val })}
						/>
					</PanelBody>
				)}

				{tab.name === "style" && <>
					<PanelBody
						className="bPlPanelBody"
						title={__("Content", "text-path")}
					>

						<BtnGroup
							className="mt20"
							label={__("Alignment", "text-path")}
							value={alignment}
							onChange={val => setAttributes({ alignment: val })}
							options={pathAlignments} isIcon={true}
						/>

						<PanelRow className="mt20">
							<BoxControl
								label={__('Padding', 'text-path')}
								values={padding}
								resetValues={{
									"top": "0px",
									"right": "0px",
									"bottom": "0px",
									"left": "0px"
								}}
								onChange={(value) => setAttributes({ padding: value })}
							/>
						</PanelRow>

					</PanelBody>
					<PanelBody
						className="bPlPanelBody"
						title={__("Title", "text-path")}
						initialOpen={ false }
					>
						<BColor label={__('Stroke Color', 'text-path')} value={strokeColor} onChange={val => setAttributes({ strokeColor: val })} defaultColor='#0000' />

						<BColor label={__('fill Color', 'text-path')} value={fillColor} onChange={val => setAttributes({ fillColor: val })} defaultColor='#ffff' />

						<BColor label={__('Text Color', 'text-path')} value={textColor} onChange={val => setAttributes({ textColor: val })} defaultColor='#31304D' />

						<Typography label={__('Text Typography', 'text-path')} value={textTypo} onChange={val => setAttributes({ textTypo: val })} defaults={{ fontSize: 16 }} produce={produce} />

						<MultiShadowControl label={__('Text Shadow', 'text-path')} value={textShadow} onChange={val => setAttributes({ textShadow: val })} type="text" produce={produce} />
					</PanelBody>
				</>
				}
			</>}
		</TabPanel>
	</InspectorControls>;
};

export default Settings;
