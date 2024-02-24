
export const Header = ({children}) => <h1 className="primary-heading">{children}</h1>;
export const Button = ({type,primary, children}) => <button className={`${primary? 'primary-btn':'normal-btn'}`} type={type}>{children}</button>