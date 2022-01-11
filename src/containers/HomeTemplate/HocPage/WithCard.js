import React from 'react'

export default function WithCard(Component) {
    return function() {
        return (
            <div>
            <div class="card">
                    <div class="card-header">
                        Header
                    </div>
                    <div class="card-body">
                      <Component />
                    </div>
                    <div class="card-footer text-muted">
                        Footer
                    </div>
                </div>
            </div>
        )
    }
        
    
}
