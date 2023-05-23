import MenuItem from "./MenuItem"


export default function Menu({ menu, menuItem }) {
    return <div style={menu}>
        <h4>This is my menu.</h4>
        <ul>
            <MenuItem menuItem={menuItem} label='Home' />
            <MenuItem menuItem={menuItem} label='About' />
            <MenuItem menuItem={menuItem} label='Stuff' />
            <MenuItem menuItem={menuItem} label='Things' />
        </ul>
    </div>
}