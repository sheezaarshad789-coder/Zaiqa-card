function Badge({ label, color }) {
  return <span className={`badge badge--${color}`}>{label}</span>
}

export default Badge
