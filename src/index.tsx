import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website Freelance',
          category: 'Dev',
          type: 'deposit',
          amount: 400,
          createdAt: new Date('2021-01-04 03:15:47')
        },
        {
          id: 2,
          title: 'Sandwich',
          category: 'Food',
          type: 'withdraw',
          amount: 12,
          createdAt: new Date('2021-01-14 09:00:32')
        },
        {
          id: 3,
          title: 'Burger Cheese',
          category: 'Food',
          type: 'withdraw',
          amount: 20,
          createdAt: new Date('2021-01-21 11:14:02')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
