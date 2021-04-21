import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../../../../main/bll/store';
import { getPacks } from '../bll/packsThunks';

import s from './Paginator.module.css';

export const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector<AppStoreType, number>((state) => state.packs.page);
  
  const clickPage = (event: MouseEvent<HTMLButtonElement>) => {
    //dispatch(PacksActions.setPage(+event.currentTarget.innerHTML));
    dispatch(getPacks({page: +event.currentTarget.innerHTML}));
  };
  const arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(i);
  }
  return (
    <div>
      <span style={{ fontWeight: 'bold' }}>Pages:</span>{' '}
      {arr.map((pages, id) => {
        return (
          <span key={id} className={`${page - 1 === id ? s.active : ''} ${s.page}`} onClick={clickPage}>
            {pages}
          </span>
        );
      })}
    </div>
  );
};
