import React from 'react';
import { Menu, MenuProps } from 'antd';
import { HomeOutlined, InfoCircleOutlined, PieChartOutlined, UserOutlined, HeatMapOutlined } from '@ant-design/icons';
import { Link, useLocation, Location } from 'react-router-dom';
import { getNavigationsValue } from '@ijl/cli'

const items: MenuProps['items'] = [
    {
        label: (<Link to={getNavigationsValue("meal-assist.search")}>About</Link>),
        key: 'search',
        // icon: <InfoCircleOutlined />,
    },
    {
        label: (<Link to={getNavigationsValue("meal-assist.pages")}>Accounts</Link>),
        key: 'pages',
        // icon: <UserOutlined />,
    },
    {
        label: (<Link to={getNavigationsValue("meal-assist.main")}>Home</Link>),
        key: 'main',
        // icon: <HomeOutlined />,
    },
    {
        label: (<Link to={getNavigationsValue("meal-assist.category")}>Pairs</Link>),
        key: 'category',
    },

];

function pathToMenuKey(location: Location): string {
    const split = location.pathname?.split('/')
    const rootIndex = split?.indexOf(getNavigationsValue("meal-assist.root"))

    return ((!rootIndex && rootIndex !== 0) || rootIndex === -1 || !split[rootIndex + 1])  ? 'home' : split[rootIndex + 1];
}

function NavBar() {
    const location = useLocation();

    return <Menu selectedKeys={[pathToMenuKey(location)]} items={items} mode="horizontal" />
}

export default NavBar
export const exportedForTesting = { pathToMenuKey }