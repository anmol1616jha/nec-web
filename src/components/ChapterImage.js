
import { bgDarkColorArray } from "../styles/constants";
import { getRandomBetween, isStringEmpty } from "../utils/helpers";

function ChapterImage({
    initials = '--'
}) {
    const randomNumber = getRandomBetween(0, 19);
    let bgColor = bgDarkColorArray[randomNumber];
    if (isStringEmpty(bgColor)) {
        bgColor = '#01130f'
    }

  return (
    <div className={`bg-[${bgColor}] min-h-[160px] flex items-center justify-center`}>
      <h1 className={`text-3xl font-bold text-[#f5f5f5]`}>{initials}</h1>
    </div>
  );
}

export default ChapterImage;
