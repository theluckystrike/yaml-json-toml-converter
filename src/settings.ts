import { PluginSettingTab, type SettingDefinitionItem } from 'obsidian';
import { sponsorsSettingItems } from './license/github-obsidian';
import { PRO_UI } from './pro';
import type DataFormatConverterPlugin from './main';

export class ConverterSettingTab extends PluginSettingTab {
	constructor(app: ConstructorParameters<typeof PluginSettingTab>[0], readonly converter: DataFormatConverterPlugin) { super(app, converter); }
	getSettingDefinitions(): SettingDefinitionItem[] {
		return [
			{ name: 'Conversion', desc: 'Select the source and target formats in the preview. Comments and YAML scalar styles will not be retained.' },
			...(this.converter.pro ? sponsorsSettingItems(this.converter.pro, PRO_UI) : []),
		];
	}
}
