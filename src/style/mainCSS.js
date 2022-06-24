import Normalize from './normalize';
import Padding from './space/PaddingCSS';
import Margin from './space/MarginCSS';

export default function MainCSS() {
  return (
    <>
      <Normalize />
      <Padding />
      <Margin />
    </>
  );
}
