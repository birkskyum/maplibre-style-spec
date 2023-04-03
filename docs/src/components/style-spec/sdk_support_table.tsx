//@ts-ignore
import style from './sdk_support_table.module.scss';
import entries from 'object.entries';
import {SolidMd} from '~/utils/SolidMd.jsx';

const SDKSupportTable = (props: { supportItems?: Object }) => {
    function support(support:any, sdk:any) {
        if (!support) return 'Not yet supported';
        support = support[sdk];
        if (support === undefined) return 'Not yet supported';
        return `>= ${support}`;
    }

    return (
        <div class={style.SDKSupportTable}>
            <table class='txt-s'>
                <thead>
                    <tr
                        class={style.headerRow}
                        style={{
                            'border-top-left-radius': '4px',
                            'border-top-right-radius': '4px',
                        }}
                    >
                        <th style={{'border-top-left-radius': '4px'}}>SDK Support</th>
                        <td>MapLibre GL JS</td>
                        <td>Android SDK</td>
                        <td>iOS SDK</td>
                        <td style={{'border-top-right-radius': '4px'}}>macOS SDK</td>
                    </tr>
                </thead>
                <tbody>
                    {entries(props.supportItems || props).map(([key, entry], i) => (
                        <tr>
                            <td>
                                <SolidMd content={key} />
                            </td>
                            <td>{support(entry, 'js')}</td>
                            <td>{support(entry, 'android')}</td>
                            <td>{support(entry, 'ios')}</td>
                            <td>{support(entry, 'macos')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SDKSupportTable;