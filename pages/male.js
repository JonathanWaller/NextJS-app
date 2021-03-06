import Link from "next/link";

const Male = () => (
  <div>
    <div className="background">
      <div className="question-box">
        <div className="text">Question 2:</div>
        <div className="question">
          Which side of the room do you sit closest to?
        </div>
        <div>
          <Link href="/Brandon/glasses_window">
            <a>Glass Walls</a>
          </Link>
          <Link href="/Brandon/spotify">
            <a>Brandon</a>
          </Link>
        </div>
      </div>
    </div>
    <style jsx>{`
      .background {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: #1f2833;

        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        background-size: cover;
        margin: 0 auto;
      }
      .question-box {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 70%;
        height: 500px;
        background-color: #c5c6c7;
        border-radius: 30px 70px;
        box-shadow: 5px 5px 4px #1a1a1d;
      }
      .text {
        font-family: Roboto, sans-serif;
        font-size: 4em;
        color: #0b0c10;
        z-index: 0.9;
      }
      .question {
        font-family: Roboto, sans-serif;
        font-size: 3em;
        color: #45a29e;
        z-index: 0.9;
        margin-bottom: 5%;
      }
      a {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 200px;
        border: none;
        height: 100px;
        border-radius: 30px;
        margin-right: 5px;
        margin-left: 5px;
        font-family: Roboto, sans-serif;
        font-size: 2.5em;
        background-color: transparent;
        text-decoration: none;
        border: solid 1px #45a293;
        color: #0b0c10;
      }
    `}</style>
  </div>
);

export default Male;
