import React, { useState, useContext } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCartOutlined } from '@ant-design/icons';
import DropdownMenu from './DropdownMenu';
import FormInput from './FormInput';
import { SearchOutlined } from '@ant-design/icons';
import { UserInfoContext } from '../../state/contexts';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #cdd7d8;
  overflow: hidden;

  .top {
    display: flex;
    align-items: center;
    padding: 8px 15px;
    flex-direction: row-reverse;
    border-bottom: 1px solid #a1a1a1;

    .top-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 50%;

      .cart-icon {
        cursor: pointer;
        color: #363636;
        margin-left: 25px;
        font-size: 28px;
        transition-duration: 0.3s;

        &:hover {
          color: #008cff;
        }

        span {
          font-weight: 500;
          font-size: 16px;
        }
      }
    }

    .top-left {
      display: flex;
      width: 50%;

      .user-profile {
      }
    }
  }

  .middle {
    padding: 15px 20px 0 20px;
    text-align: center;

    .search-bar-wrapper {
      border-bottom: 1px solid #a1a1a1;
      padding-bottom: 15px;
    }
  }

  .bottom {
    height: 50px;
    padding: 15px 20px;
    display: flex;
    justify-content: space-evenly;

    a {
      color: #111;
      text-decoration: underline;
    }
  }
`;

export default function Navigation() {
  const [input, setInput] = useState('');
  const { authService } = useOktaAuth();
  const userInfo = useContext(UserInfoContext);

  return (
    <Wrapper>
      <div className="top">
        <div className="top-right">
          <DropdownMenu
            title="My Market"
            items={['Purchase History', 'Saved Items', 'Messages']}
          />

          <Link to={{ pathname: '/cart', userInfo }}>
            <ShoppingCartOutlined className="cart-icon" />
          </Link>
        </div>

        <div className="top-left">
          <div className="user-profile">
            <DropdownMenu
              title={'Hi, ' + userInfo.name.split(' ')[0]}
              items={[
                'Account Settings',
                <span onClick={() => authService.logout()}>Sign Out</span>,
              ]}
            />
          </div>
        </div>
      </div>

      <div className="middle">
        <div className="search-bar-wrapper">
          <FormInput
            name="search-bar"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Search MarketPlace"
            labelId=""
            Icon={<SearchOutlined />}
            styles={{ maxWidth: '500px' }}
          />
        </div>
      </div>

      <div className="bottom">
        <Link to="/">Home</Link>
        <span>Wishlist</span>
        <span>Products</span>
        <span>Categories</span>
      </div>
    </Wrapper>
  );
}
