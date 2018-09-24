/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(2056),
      allowNull: false
    },
    copyright: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    author_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    publisher_id: {
      type: DataTypes.INTEGER(11),
      alloNull: false,
      references: {
        model: 'publishers',
        key: 'id'
      }
    },
  }, {
    tableName: 'books',
  });
};
