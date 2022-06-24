import LogoHeader from '../components/LogoHeader';
import Searcher from '../components/Searcher';
import { FlexColumn } from '../style/components/FlexCSS';

export default function Header() {
  return (
    <header className="py-4">
      <FlexColumn>
        <LogoHeader></LogoHeader>
        <Searcher></Searcher>
      </FlexColumn>
    </header>
  );
}
