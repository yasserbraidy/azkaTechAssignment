import { memo } from 'react'
import { Row,Col } from 'react-bootstrap'

// Redux Selector / Action
import { useSelector } from 'react-redux';

// Import selectors & action from setting store
import * as SettingSelector from '../../store/setting/selectors'

import HomeHeader from '../../components/HomeHeader';
import Impressions from '../../components/Impressions';
import PostCountCard from '../../components/PostsCountCard';
import CommentCountCard from '../../components/CommentCountCard';
import UsersCard from '../../components/UsersCard';
import CommentsChart from '../../components/CommentsChart';
import UserFilterTable from '../../components/UserFilterTable';
import useDashboardHooks from './Hooks';
import Loader3 from '../../components/Loader';
import ErrorAlert from '../../components/Error';

const Home = memo((props) => {
    useSelector(SettingSelector.theme_color)
    const {
      userPostCounts,
      loader,
      fetchingError,
      totalComments,
      totalPosts,
      totalUsers,
      totalImpressions,
    } = useDashboardHooks();
    return (
        <>
                    {loader && <Loader3 />}
        {!loader && fetchingError.isError && <ErrorAlert {...fetchingError} />}
            {!loader && !fetchingError.isError && (
                <>
                    <HomeHeader />

                    <Row>
                        <Impressions />

                        <Col lg="3" md="6">
                            <Row>
                            <PostCountCard />
                            <CommentCountCard />
                            </Row>
                        </Col>
                        <UsersCard />
                        <CommentsChart />
                        <UserFilterTable />
                    </Row>
                </>
            )}
        </>
    );
    }
)

Home.displayName="Home"
export default Home
