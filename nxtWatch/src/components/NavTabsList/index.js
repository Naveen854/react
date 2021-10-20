import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {CgPlayListAdd} from 'react-icons/cg'
import {TAB_ITEMS} from '../../constants/appConstants'
import NavTabItem from '../NavTabItem'
import {TabsListContainer} from './styledComponents'

const NavTabsList = props => {
  const {pathname, closePopUp} = props
  return (
    <TabsListContainer>
      <NavTabItem
        tabData={TAB_ITEMS.home}
        pathname={pathname}
        closePopUp={closePopUp}
      >
        <AiFillHome
          size={16}
          color={TAB_ITEMS.home.path === pathname ? '#ff0000' : '#7e858e'}
        />
      </NavTabItem>
      <NavTabItem
        tabData={TAB_ITEMS.trending}
        pathname={pathname}
        closePopUp={closePopUp}
      >
        <HiFire
          size={16}
          color={TAB_ITEMS.trending.path === pathname ? '#ff0000' : '#7e858e'}
        />
      </NavTabItem>
      <NavTabItem
        tabData={TAB_ITEMS.gaming}
        pathname={pathname}
        closePopUp={closePopUp}
      >
        <SiYoutubegaming
          size={16}
          color={TAB_ITEMS.gaming.path === pathname ? '#ff0000' : '#7e858e'}
        />
      </NavTabItem>
      <NavTabItem
        tabData={TAB_ITEMS.savedVideos}
        pathname={pathname}
        closePopUp={closePopUp}
      >
        <CgPlayListAdd
          size={16}
          color={
            TAB_ITEMS.savedVideos.path === pathname ? '#ff0000' : '#7e858e'
          }
        />
      </NavTabItem>
    </TabsListContainer>
  )
}

export default NavTabsList
