import './WordleSection.css';

import WordleTable from './WordleTable';
import OkButton from './OkButton';
import ResetButton from './ResetButton';
import ResultDiv from './ResultDiv';

export default function WordleSection() {   

    return (
        <section>
            <WordleTable />
            <div className="button_container">
                <OkButton />
                <ResetButton />
            </div>
            <ResultDiv />
        </section>
    )
}