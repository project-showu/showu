import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const MypageContainer = () => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <S.Container className='Container'>
      <S.LeftSection className='Wapper'>
        <S.Title className='title'>
          <li>마이페이지</li>
          <li>{currentUser.name}님, 안녕하세요!</li>
        </S.Title>
        <S.Ul>
            <li>MY TEAM</li>
            <Link to={"/my-team"}>
              <li>팀 매칭</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>MY CLASS</li>
            <Link to={"/my-class/created"}>
              <li>레슨</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>예약 정보</li>
          <Link to={"/my-res/space"}>
            <li>공간 대여 내역</li>
          </Link> 
            <Link to={"/my-res/ticket"}>
              <li>티켓 예매 내역</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
            <li>VOD 정보</li>
            <Link to={"/my-vod"}>
              <li>나의 VOD</li>
            </Link>
            <Link to={"/my-vod/subscriptions"}>
              <li>구독한 리스트</li>
            </Link>
            {/* <Link to={"/my-vod/watching"}>
              <li>시청중인 컨텐츠</li>
            </Link> */}
            <hr />
        </S.Ul>
        <S.Ul>
            <li>활동 정보</li>
            <Link to={"/my-active/like/my-team"}>
              <li>찜</li>
            </Link>
            {/* <Link to={"/my-active/reviews"}>
              <li>후기 관리</li>
            </Link> */}
            <Link to={"/my-active/posts"}>
              <li>작성한 글</li>
            </Link>
            {/* <Link to={"/my-active/reports"}>
              <li>제보 관리</li>
            </Link> */}
            <hr />
        </S.Ul>
        <S.Ul>
            <li>등급업 정보</li>
            {
              currentUser.isUpgradeRequested ? (
                <Link to="/mypage/up-grade/update" className='highlight'>
                  <li>등급업 수정</li>
                </Link>
              ) : (
                <Link to="/up-grade" className='highlight'>
                  <li>등급업 신청</li>
                </Link>
               )
            }
            <hr />
        </S.Ul>
        <S.Ul>
            <li>결제 정보</li>
            <Link to={"/my-pay"}>
              <li>결제 내역</li>
            </Link>
            <hr />
        </S.Ul>
        <S.Ul>
          <Link to={"/mypage"}>
            <li>회원정보 관리</li>
          </Link>
        </S.Ul>
      </S.LeftSection>
      
    </S.Container>
  );
};

export default MypageContainer;