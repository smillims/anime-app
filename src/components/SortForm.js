import styles from '../css/style.css';
import SearchInputSortForm from '../components/SearchInpurSortForm';
import ApplyButtonSortForm from '../components/ApplyButtonSortForm';

export default function SortForm() {
  return ` <div class="${styles.sectionForm}">
              <form class="${styles.sortForm}" id="sortForm" name="sortForm" onsubmit="return false;">
                <div class="${styles.blockSearch}">
                  ${SearchInputSortForm()}
                  ${ApplyButtonSortForm()}
                </div>
              </form>
            </div>`;
}
