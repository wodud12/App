import slideData from '../date/slideDate';
import Slide from '../components/slide/slide';

function Main() {
  return (
    <div>
      {slideData.map((section, idx) => (
        <Slide key={idx} title={section.title} items={section.items} />
      ))}
    </div>
  );
}

export default Main;
