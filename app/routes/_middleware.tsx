import { createRoute } from 'honox/factory'
import { detailedLogger } from '../middlewares/logger';

// 创建路由中间件
export default createRoute(detailedLogger);
