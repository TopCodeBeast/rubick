export const maxBuy = `SELECT date(e.timestamp), COALESCE(MAX(e.meta::bigint), 0) 
    FROM event e 
    LEFT JOIN nft_entity ne on ne.id = e.nft_id 
    WHERE e.interaction = 'BUY' AND ne.collection_id = $1 
    GROUP BY date(e.timestamp) 
    ORDER BY date(e.timestamp) ASC;`

  export const floorList = `SELECT date(e.timestamp), COALESCE(MIN(e.meta::bigint), 0) 
    FROM event e 
    LEFT JOIN nft_entity ne on ne.id = e.nft_id 
    WHERE e.interaction = 'LIST' AND ne.collection_id = $1 
    GROUP BY date(e.timestamp) 
    ORDER BY date(e.timestamp) ASC;`

  export const averageBuy = `SELECT date(e.timestamp), COALESCE(AVG(e.meta::bigint), 0) 
    FROM event e 
    LEFT JOIN nft_entity ne on ne.id = e.nft_id 
    WHERE e.interaction = 'BUY' AND ne.collection_id = $1 
    GROUP BY date(e.timestamp) 
    ORDER BY date(e.timestamp) ASC;`