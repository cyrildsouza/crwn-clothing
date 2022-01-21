import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import CollectionItem from '../../components/collectionItem';
import { IState } from '../../redux/reducer';
import { IItems, shopKey } from '../../redux/shopData';
import './categoryStyle.scss';

interface IProps {
    match: {
        params: {
            category: typeof shopKey[number];
        };
    };
}

const mapStateToProps = ({ shop }: IState) => ({
    shop,
});

const Category: React.FunctionComponent<IProps> = ({ match }) => {
    const category = match.params.category;
    const { shop } = useSelector(mapStateToProps, shallowEqual);
    const categoryItem = shop[category];
    return (
        <div className="collection-page">
            <h2 className="title">{categoryItem?.title.toUpperCase()}</h2>
            <div className="items">
                {categoryItem ? categoryItem.items.map((item: IItems) => (
                    <CollectionItem item={item} key={item.id}/>
                )): null}
            </div>
            
        </div>
    );
};

export default Category;