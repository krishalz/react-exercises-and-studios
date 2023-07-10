export default function hobbyLinks() {
  let hobbyLinks = [
    "https://pnthn.com/knowledge/audiobooks-for-walks-and-runs",
    "https://www.piedmont.org/living-better/8-reasons-why-hiking-is-great-exercise#:~:text=Like%20most%20cardio%20exercises%2C%20hiking,help%20you%20manage%20your%20weight.",
  ];

  return (
    <div>
      <h3>My fun hobbies!</h3>
      <ol>
        <li>
          <a href={hobbyLinks[0]}>Walking and Listening to a Good Book</a>
        </li>
        <li>
          <a href={hobbyLinks[1]}>Hiking is Fun and Good Exercise</a>
        </li>
      </ol>
    </div>
  );
}
