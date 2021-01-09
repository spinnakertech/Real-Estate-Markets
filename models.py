def create_classes(db):
    class Unemployment(db.Model):
        __tablename__ = 'unemployment'

        year = db.Column(db.Integer)
        month_code = db.Column(db.String(64))
        month_name = db.Column(db.String(64))
        unemployment_rate = db.Column(db.Float)
        hourly_rate = db.Column(db.Float)

        def __repr__(self):
            return '<Employment %r>' % (self.month_name)
    return Employment

#    class Real_Estate_Sales(db.Model):
#        __tablename__ = 'real_estate_sales'
#
#        region = db.Column(db.String(64))
#        region_type = db.Column(db.String(64))
#        state_code = db.Column(db.String(64))
#        last_updated = db.Column(db.String(64))
#        state_name = db.Column(db.String(64))
#        active_listings = db.Column(db.Integer)
#        homes_sold = db.Column(db.Integer)
#        homes_inventory = db.Column(db.Integer)
#        median_dom = db.Column(db.Integer)
#        median_sale_price = db.Column(db.Integer)
#        months_of_supply = db.Column(db.Integer)
#        new_listings = db.Column(db.Integer)
#        pending_sales = db.Column(db.Integer)
#        region_type_id = db.Column(db.Integer)
#        month = db.Column(db.String(64))
#        year = db.Column(db.String(64))
#
#        def __repr__(self):
#            return '<Real_Estate_Sales %r>' % (self.region)
#    return Real_Estate_Sales
#
#        class Covid_Closed_States(db.Model):
#        __tablename__ = 'covid_closed_states'
#
#        state_id = db.Column(db.String(64))
#        date = db.Column(db.String(64))
#        policy_type = db.Column(db.String(64))
#        start_stop = db.Column(db.String(64))
#
#        def __repr__(self):
#            return '<Covid_Closed_States %r>' % (self.state_id)
#    return Covid_Closed_States