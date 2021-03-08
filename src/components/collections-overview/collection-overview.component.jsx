import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionsOverview=({collections}) =>(
    <div className='collections-overview'>
     {collections.map(({id, ...otherCollectionProps})=>(
               <CollectionPreview key={id}{...otherCollectionProps}></CollectionPreview>
           ))}
    </div>
);

const mapStatetoProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect (mapStatetoProps)(CollectionsOverview)