# 迁移数据库
将转换好的SQL复制到migrations/日期_initial_migration.sql文件中

## 本地迁移
npx wrangler d1 migrations apply archive

## 远程迁移
npx wrangler d1 migrations apply archive --remote

# 远程执行SQL
npx wrangler d1 execute archive --remote --file=./schema.sql

# 本地执行SQL
npx wrangler d1 execute archive --local --file=./schema.sql

# 创建数据库
npx wrangler d1 create archive

# 查看Pages部署日志
npx wrangler pages deployment tail

# 登录Cloudflare
npx wrangler login

# 备份数据库
npx wrangler d1 backup archive --output=./d1_backup.sqlite

# 导出数据库
npx wrangler d1 export archive --file=./d1_export.sql
