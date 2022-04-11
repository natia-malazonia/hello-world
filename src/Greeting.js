import styles from './Greeting.module.css'
import { useParams } from 'react-router'

function Greeting() {
  const { userName } = useParams()

  return (
    <div className={styles.background}>
      <img
        src={require('./assets/robot.png')}
        alt="robot"
        className={styles.robotLogo}
      />
      {userName && (
        <p className={styles.greeting}>
          {' '}
          {`<`} <span className={styles.hello}>Hello,</span>{' '}
          <span className={styles.name}>{userName}</span> {`/`}
          {`>`}{' '}
        </p>
      )}
      {!userName && (
        <p className={styles.greeting}>
          {' '}
          {`<`} <span className={styles.hello}>Hello</span>{' '}
          <span className={styles.name}>World</span> {`/`}
          {`>`}{' '}
        </p>
      )}
    </div>
  )
}

export default Greeting
