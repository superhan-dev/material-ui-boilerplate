import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';

const AdminLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const AdminLayoutWrapper = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  })
);

const AdminLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const AdminLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const AdminLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <AdminLayoutRoot>
      <AdminNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <AdminSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <AdminLayoutWrapper>
        <AdminLayoutContainer>
          <AdminLayoutContent>
            <Outlet />
          </AdminLayoutContent>
        </AdminLayoutContainer>
      </AdminLayoutWrapper>
    </AdminLayoutRoot>
  );
};

export default AdminLayout;
