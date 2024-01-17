import styles from "./analytics.module.css";

import edit from "../../../assets/edit.svg";
import remove from "../../../assets/delete.svg";
import share from "../../../assets/share.svg";
const AnalysisTableCard = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Quiz Name</th>
            <th>Created on</th>
            <th>Impression</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Quiz 1</td>
            <td>01 Sep , 2023</td>
            <td>345</td>
            <td>
              <img src={edit} />
              <img src={remove} />
              <img src={share} />
            </td>
            <td>Question Wise Analysis</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Quiz 2</td>
            <td>04 Sep , 2023</td>
            <td>667</td>
            <td>
              <img src={edit} />
              <img src={remove} />
              <img src={share} />
            </td>
            <td>Question Wise Analysis</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Quiz 3</td>
            <td>06 Sep , 2023</td>
            <td>1.6K</td>
            <td>
              <img src={edit} />
              <img src={remove} />
              <img src={share} />
            </td>
            <td className={styles.qa}>Question Wise Analysis</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Quiz 4</td>
            <td>09 Sep , 2023</td>
            <td>789</td>

            <td>
              <img src={edit} />
              <img src={remove} />
              <img src={share} />
            </td>

            <td className={styles.qa}>Question Wise Analysis</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Quiz 5</td>
            <td>11 Sep , 2023</td>
            <td>995</td>

            <td>
              <img src={edit} />
              <img src={remove} />
              <img src={share} />
            </td>

            <td className={styles.qa}>Question Wise Analysis</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Quiz 6</td>
            <td>13 Sep , 2023</td>
            <td>2.5K</td>
            <td>
              <img src={edit} />
              <img src={remove} />
              <img src={share} />
            </td>
            <td className={styles.qa}>Question Wise Analysis</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Quiz 7</td>
            <td>14 Sep , 2023</td>
            <td>231</td>
            <td>
              <img src={edit} />
              <img src={remove} />
              <img src={share} />
            </td>
            <td className={styles.qa}>Question Wise Analysis</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Quiz 8</td>
            <td>17 Sep , 2023</td>
            <td>1.3K</td>
            <td>
              <img src={edit} />
              <img src={remove} />
              <img src={share} />
            </td>
            <td className={styles.qa}>Question Wise Analysis</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AnalysisTableCard;
