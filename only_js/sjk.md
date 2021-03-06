# 数据库

1. 关系运算中，五种基本运算：并、差、交、投影、选择

2. 数据库管理系统能实现对数据库中数据的查询、插入、修改和删除等操作，这种功能称为：数据操纵功能

3. SQL语言具有两种形式：交互式SQL（直接输入）、嵌入式SQL（高级语言）

4. SQL Server 中，主数据库文件的扩展名为 mdf， 日志文件拓展名 ldf

5. 传统的数据模型分类，数据库系统可以分为：层次、网状和关系

6. 在数据库设计中，用E-R图来描述信息结构但不涉及信息在计算机中的表示，它是数据库设计的概念设计阶段。

7. 数据库中存储的是数据以及数据之间的联系

8. 关系模式：有几个矩形就有几个，如果有多对多，那么会单独抽象出一个关系模式。

9. 用于数据库恢复的重要文件是日志文件

10. 修改表结构 ALTER tablename ADD / DROP element_name

11. 人工管理阶段,文件系统阶段和数据库系统阶段. 其中数据独立性最高的阶段是 数据库系统阶段.

12. 创建唯一索引: CREATE UNIQUE INDEX index_name ON table_name(element_name)

13. 收回用户某个权限命令: REVOKE action【插入删除这些】(element_name) ON tablename FROM username

14. 自然连接就是通过两个表的共有属性进行连接。所以R、S具有相同的属性

15. SQL 通配符【字符串匹配】:
    * % 任意0个或多个字符
    * \- 任意单个字符
    * [] 范围内的字符，类似正则

16. 交集取同，并集取异， 连接取相同的属性【不需要完全一致的连接方式】

17. 对数据模式来说，采用三级模式的为了解决数据独立性。

18. 数据库系统减少了数据冗余。

19. 关系的完整性:
    1. 实体约束性和参照完整性都是对于主键或者外键。
    2. 对于某个属性进行数值约束属于用户自定义约束

20. 若数据库中只包含成功事务提交的结果，则此数据库就称为处于一致状态

21. 关系运算中花费时间可能最长的运算是笛卡尔积 【一般都不用的这玩意】

22. SQL语言包括三种主要程序设计语言类别的语句：数据定义语言(DDL)，数据操作语言(DML)及数据控制语言(DCL)。 即 定义表结构，插入数据，给数据库管理员授权等

23. 数据库管理系统通常提供授权功能来控制不同用户访问数据的权限，这主要是为了实现数据库的安全性【 防止被别人 rm -rf /* 】

24. X锁： 排他锁。排他锁 意味着只有添加排他锁的用户读取修改。类似于火车取票。如果其他数据加了S锁，共享锁，那么其他事务只能给其添加S锁。共享锁只能查看不可以修改。

25. 数据库的完整性是指数据的正确性和相容性

26. 在数据库的三级模式结构中，描述数据库中全体数据的全局逻辑结构和特征的是：模式

27. 并发操作会带来一致性问题包括：丢失修改、不可重复读、脏读

28. 数据库系统的数据独立性表示不会因为系统数据存储结构与数据逻辑结构的变化而影响应用程序

29. 保护数据库，防止未经授权的或不合法的使用造成的数据泄漏、更改破坏，这是指数据的安全性

30. 数据库系统的特点是数据共享、数据独立、减少数据冗余、避免数据不一致和加强了数据保护

31. 数据库技术的奠基人之一E.F．Codd从1970年起发表过多篇论文，主要论述的是关系型数据库

32. 事务的原子性 事务的原子性指的是，事务中包含的程序作为数据库的逻辑工作单位，它所做的对数据改操作要全部执行，要么全部不执行。

33. 数据库管理系统(DBMS)是系统软件

34. 解决并发操作带来的数据不一致性总是普遍采用封锁【排他锁、共享锁】

35. 关系数据库管理系统应能实现的专门关系运算包括：选择、投影、连接

36. 概念模型：独立于机器和DBMS

37. 数据库是长期储存在计算机内、有组织、可共享的大量数据的集合。

38. 在SQL语言中，为了数据库的安全性，设置了对数据的存取进行控制的语句，对用户授权使用 GRANT 语句，收回所授的权限使用 REVOKE 语句

39. 在关系模型中，实体以及实体间的联系都是用关系【二维表】来表示的。

40. 实体完整性要求每一个表中的主键字段都不能为空或者重复的值

41. 若事务在运行过程中，由于种种原因，使事务未运行到正常终止点之间就被撤消，这种情况就称为 事务故障。

42. 对于存取权限的定义成为授权。

43. 数据库(DB)、数据库系统(DBS)和数据库管理系统(DBMS)三者之间的关系：数据库系统包括数据库和数据库管理系统

44. 多对多关系的关键字是两个关键字

45. 在关系数据库设计中，设计关系模式是逻辑设计的任务。

46. 在数据库中，产生数据不一致的根本原因是未对数据进行完整性控制

47. 元组表示数据库中的一张表中的某一行。属性是某一列。

48. 数据流程图（DFD）是用于描述结构化方法中需求分析阶段的工具

49. 可移植性不是数据库系统必须提供的数据控制功能

50. SQL语言是非过程化的语言，易学习s

51. 在T-SQL中，查询表中数据时，可用 DISTINCT 关键字滤掉重复行。

52. 数据模型一般来说是由三个部分组成，分别是：数据结构、数据操作、数据约束。

53. DML 触发器是当数据库服务器中发生数据操作语言事件时会自动执行的存储过程。

54. 在信息世界中能唯一标识实体的属性集，称为码。

55. 数据库系统的核心是数据库管理系统（DBMS）

56. 事务是DBMS的基本单位，它是用户定义的一组逻辑一致的程序序列。

57. 实体完整性是指在基本表中，主属性不能取空值

58. 消除了部分函数依赖的1NF的关系模式，必定是2NF

59. 在数据库设计中，把数据需求写成文档，它是各类数据描述的集合，包括数据项、数据结构、数据流、数据存储和数据加工过程等的描述，通常称为需求分析

60. 如果关系模式R是1NF，且每个非主属性完全函数依赖于主键，那么称R是第二范式的模式。

61. 如果关系模式R是2NF，所有非主属性对任何候选关键字都不存在传递依赖，则称关系R是属于第三范式。

## 背【极简模式，慎用】

    1. 视图的优点:
        1. 为用户集中数据，简化用户的数据查询和处理
        2. 保证数据的逻辑独立性
        3. 重新定制数据，使得数据便于共享
        4. 数据的安全性保障，增强了安全性。
    
    2. 存储过程的优点：
        1. 允许模块化程序设计
        2. 允许更快地执行
        3. 减少网络流量
        4. 可作为安全机制使用，提高数据库安全性
    
    3. 事务的定义和特性:
        1. 事务是作为单个逻辑工作单元所做的一系列操作，这一系列的操作要么都执行要么都不被执行。
        2. 特性：原子性、一致性、隔离性和持久性。
    
    4. T-SQL 语言特点：
        1. 综合统一
        2. 两种使用方式，同一的语法结构
        3. 高度非过程化
        4. 类似于人类的思维习惯，容易理解和掌握。

## 注释

* 有一切，必然等格式都是错的
