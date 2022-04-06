// third-party
import { FormattedMessage } from 'react-intl';

// assets
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PaidIcon from '@mui/icons-material/Paid';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import StarIcon from '@mui/icons-material/Star';

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'Assets',
      title: <FormattedMessage id='Assets' />,
      type: 'item',
      url: '/assets',
      icon: BusinessCenterIcon,
      breadcrumbs: false,
    },
    {
      id: 'Transactions',
      title: <FormattedMessage id='Transactions' />,
      type: 'item',
      url: '#',
      icon: PaidIcon,
      breadcrumbs: false,
    },
    {
      id: 'Marketing',
      title: <FormattedMessage id='Marketing' />,
      type: 'item',
      url: '#',
      icon: LocalGroceryStoreIcon,
      breadcrumbs: false,
    },
    {
      id: 'Notification',
      title: <FormattedMessage id='Notification' />,
      type: 'item',
      url: '#',
      icon: NotificationsActiveIcon,
      breadcrumbs: false,
    },
    {
      id: 'Invite Friends',
      title: <FormattedMessage id='Invite Friends' />,
      type: 'item',
      url: '#',
      icon: PermContactCalendarIcon,
      breadcrumbs: false,
    },
    {
      id: 'Bom NFT',
      title: <FormattedMessage id='Bom NFT' />,
      type: 'item',
      url: '#',
      icon: StarIcon,
      breadcrumbs: false,
    },
  ],
};

export default other;
