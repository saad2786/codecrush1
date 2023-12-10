import './examples.scss'

export default function Examples({ topic }) {
  return (
    <ul className="desc examples">
      {topic?.examples?.map((example) => {
        return (
          <li className="listItem " key={topic?.id}>
            <span className="listDesc">{example}</span>
          </li>
        )
      })}
    </ul>
  )
}
