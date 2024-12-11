/* eslint-disable react/prop-types */

const Button = ({isBeam=false,containerClass,label ,href}) => {
  return (
    <a className={`btn ${containerClass}`} href={href}>
        {
            isBeam&&(
                <span className="relative h-3 w-3 flex">
                    <span className="btn-ping"></span>
                    <span className="btn-ping_dot"></span>
                </span>
            )
        }
        {label}
    </a>
  )
}

export default Button