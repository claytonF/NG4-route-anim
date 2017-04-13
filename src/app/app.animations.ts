import { animate, AnimationEntryMetadata, state, style, transition, trigger} from '@angular/core';

const speed:string = '200ms';

export const routeAnimation: AnimationEntryMetadata = [

    trigger('routing',[
        state('*',style({transform: 'translateX(0)'})),
        transition('void => backward',[
            style({transform: 'translateX(-100%'}),
            animate(speed)
        ]),
        transition('backward => void',[
            animate(speed,style({
                transform:'translateX(100%)'
            }))
        ]),
        transition('void => forward',[
            style({transform: 'translateX(100%'}),
            animate(speed)
        ]),
        transition('forward => void',[
            animate(speed,style({
                transform:'translateX(-100%)'
            }))
        ])
    ])

]