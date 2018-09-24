/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authors', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'authors',
    timestamps: false
  });
};
