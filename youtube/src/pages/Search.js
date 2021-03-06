import React from 'react';

import styled from 'styled-components';
import qs from 'qs';

import { Grid } from '../elements';
import Category from '../components/Category';
import PostCard from '../components/PostCard';

import { useSelector, useDispatch } from 'react-redux';

import { actionCreators as postActions } from '../redux/modules/post';

const Search = () => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);
  React.useEffect(() => {
    dispatch(postActions.getPostAPI());
  }, []);
  return (
    <>
      <Grid width="100vw" height="100vh">
        <Wrap>
          {post_list.map((post, idx) => {
            return <PostCard key={post.postId} {...post}></PostCard>;
          })}
        </Wrap>
      </Grid>
    </>
  );
};

const Wrap = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  @media screen and (min-width: 1607px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: 960px) and (max-width: 1607px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 551px) and (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 0px) and (max-width: 551px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default Search;
