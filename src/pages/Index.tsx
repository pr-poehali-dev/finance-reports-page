import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Q4 2024');

  const companies = [
    {
      name: 'Сбербанк',
      ticker: 'SBER',
      revenue: '4 280 млрд ₽',
      profit: '1 540 млрд ₽',
      margin: '36%',
      change: '+12.4%',
      trend: 'up'
    },
    {
      name: 'Газпром',
      ticker: 'GAZP',
      revenue: '8 950 млрд ₽',
      profit: '2 100 млрд ₽',
      margin: '23%',
      change: '-8.2%',
      trend: 'down'
    },
    {
      name: 'Яндекс',
      ticker: 'YNDX',
      revenue: '824 млрд ₽',
      profit: '89 млрд ₽',
      margin: '11%',
      change: '+28.7%',
      trend: 'up'
    },
    {
      name: 'Лукойл',
      ticker: 'LKOH',
      revenue: '12 400 млрд ₽',
      profit: '1 890 млрд ₽',
      margin: '15%',
      change: '+5.1%',
      trend: 'up'
    },
    {
      name: 'МТС',
      ticker: 'MTSS',
      revenue: '537 млрд ₽',
      profit: '78 млрд ₽',
      margin: '15%',
      change: '-2.3%',
      trend: 'down'
    }
  ];

  const metrics = [
    {
      title: 'Общая капитализация',
      value: '89.4 трлн ₽',
      change: '+15.2%',
      icon: 'TrendingUp'
    },
    {
      title: 'Средняя прибыльность',
      value: '18.6%',
      change: '+2.1%',
      icon: 'Target'
    },
    {
      title: 'Количество компаний',
      value: '247',
      change: '+12',
      icon: 'Building2'
    },
    {
      title: 'Общая выручка',
      value: '124.8 трлн ₽',
      change: '+8.9%',
      icon: 'DollarSign'
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Финансовая аналитика</h1>
            <p className="text-muted-foreground mt-2">
              Отчеты о финансовом положении российских компаний
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Icon name="Download" size={16} className="mr-2" />
              Экспорт
            </Button>
            <Button>
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить компанию
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name={metric.icon} size={16} className="text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center mt-2">
                  <Icon 
                    name="TrendingUp" 
                    size={14} 
                    className={`mr-1 ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`} 
                  />
                  <span className={`text-sm ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart Section */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Динамика капитализации</CardTitle>
              <div className="flex items-center gap-2">
                <Button 
                  variant={selectedPeriod === 'Q4 2024' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedPeriod('Q4 2024')}
                >
                  Q4 2024
                </Button>
                <Button 
                  variant={selectedPeriod === '2024' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedPeriod('2024')}
                >
                  2024
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80 rounded-lg overflow-hidden">
              <img 
                src="/img/0489dfd9-5f4b-4c0a-80ca-dfd4961603f3.jpg" 
                alt="График капитализации" 
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Companies Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Финансовые отчеты компаний</CardTitle>
              <Tabs defaultValue="all" className="w-auto">
                <TabsList>
                  <TabsTrigger value="all">Все</TabsTrigger>
                  <TabsTrigger value="profitable">Прибыльные</TabsTrigger>
                  <TabsTrigger value="growth">Растущие</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Компания</TableHead>
                  <TableHead>Выручка</TableHead>
                  <TableHead>Прибыль</TableHead>
                  <TableHead>Маржинальность</TableHead>
                  <TableHead>Изменение</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companies.map((company, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell>
                      <div>
                        <div className="font-medium">{company.name}</div>
                        <div className="text-sm text-muted-foreground">{company.ticker}</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{company.revenue}</TableCell>
                    <TableCell className="font-medium">{company.profit}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{company.margin}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Icon 
                          name={company.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                          size={14} 
                          className={`mr-1 ${company.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} 
                        />
                        <span className={`text-sm ${company.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                          {company.change}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Eye" size={14} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Download" size={14} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;