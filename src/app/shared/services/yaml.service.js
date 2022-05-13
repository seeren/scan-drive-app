import { Service } from 'appable';

import YAML from 'yaml';

import da from '../../../translations/da.yaml';
import de from '../../../translations/de.yaml';
import en from '../../../translations/en.yaml';
import es from '../../../translations/es.yaml';
import fi from '../../../translations/fi.yaml';
import fr from '../../../translations/fr.yaml';
import it from '../../../translations/it.yaml';
import ja from '../../../translations/ja.yaml';
import nb from '../../../translations/nb.yaml';
import nl from '../../../translations/nl.yaml';
import pt from '../../../translations/pt.yaml';
import sv from '../../../translations/sv.yaml';
import tr from '../../../translations/tr.yaml';

export const YamlService = new class extends Service {

    #yamlList = {
        da,
        de,
        en,
        es,
        fi,
        fr,
        it,
        ja,
        nb,
        nl,
        pt,
        sv,
        tr,
    };

    get(language) {
        if (language in this.#yamlList) {
            return YAML.parse(this.#yamlList[language]);
        }
        throw new Error(`Yaml file "${language}" not exists`);
    }

    getLanguages() {
        return Object.keys(this.#yamlList);
    }

}();
