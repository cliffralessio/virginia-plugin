/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
/**
 * Lets webpack process  CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Import hamburgers CSS.
 */
import 'hamburgers/dist/hamburgers.css';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object} props - Block properties.
 * @param {Object} props.attributes - Block attributes.
 * @param {Function} props.setAttributes - Function to update block attributes.
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
    const { classMode } = attributes;
    const [isActive, setIsActive] = useState(false);

    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls key="setting">
                <PanelBody title={__('Burger button animation', 'virginia')}>
                    <SelectControl
                        label={__('Animation Style', 'virginia')}
                        value={classMode || 'squeeze'}
                        options={[
                            { label: __('3DX', 'virginia'), value: '3dx' },
                            { label: __('3DX Reverse', 'virginia'), value: '3dx-r' },
                            { label: __('3DY', 'virginia'), value: '3dy' },
                            { label: __('3DY Reverse', 'virginia'), value: '3dy-r' },
                            { label: __('3DXY', 'virginia'), value: '3dxy' },
                            { label: __('3DXY Reverse', 'virginia'), value: '3dxy-r' },
                            { label: __('Arrow', 'virginia'), value: 'arrow' },
                            { label: __('Arrow Reverse', 'virginia'), value: 'arrow-r' },
                            { label: __('Arrowalt', 'virginia'), value: 'arrowalt' },
                            { label: __('Arrowalt Reverse', 'virginia'), value: 'arrowalt-r' },
                            { label: __('Arrowturn', 'virginia'), value: 'arrowturn' },
                            { label: __('Arrowturn Reverse', 'virginia'), value: 'arrowturn-r' },
                            { label: __('Boring', 'virginia'), value: 'boring' },
                            { label: __('Collapse', 'virginia'), value: 'collapse' },
                            { label: __('Collapse Reverse', 'virginia'), value: 'collapse-r' },
                            { label: __('Elastic', 'virginia'), value: 'elastic' },
                            { label: __('Elastic Reverse', 'virginia'), value: 'elastic-r' },
                            { label: __('Emphatic', 'virginia'), value: 'emphatic' },
                            { label: __('Emphatic Reverse', 'virginia'), value: 'emphatic-r' },
                            { label: __('Minus', 'virginia'), value: 'minus' },
                            { label: __('Slider', 'virginia'), value: 'slider' },
                            { label: __('Slider Reverse', 'virginia'), value: 'slider-r' },
                            { label: __('Spin', 'virginia'), value: 'spin' },
                            { label: __('Spin Reverse', 'virginia'), value: 'spin-r' },
                            { label: __('Spring', 'virginia'), value: 'spring' },
                            { label: __('Spring Reverse', 'virginia'), value: 'spring-r' },
                            { label: __('Stand', 'virginia'), value: 'stand' },
                            { label: __('Stand Reverse', 'virginia'), value: 'stand-r' },
                            { label: __('Squeeze', 'virginia'), value: 'squeeze' },
                            { label: __('Vortex', 'virginia'), value: 'vortex' },
                            { label: __('Vortex Reverse', 'virginia'), value: 'vortex-r' },
                        ]}
                        onChange={(newMode) => {
                            setAttributes({
                                classMode: newMode
                            });
                        }}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <button type="button"
                    className={`hamburger hamburger--${classMode} ${isActive ? 'is-active' : ''}`}
                    onClick={() => setIsActive(!isActive)}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </>
    );
}